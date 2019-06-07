import json, csv

def add_csv_data_to_state_geojson(source_geojson, source_csv, save_as):
    ''' This function will take a state-level geojson file and
    add properties to each state.  The name of each property will 
    be the column header. Duplicate properties will be over-written.
    Properties for unrecognized states will be ignored. The first 
    column in the csv must indicate the state.
    example execution:
    > from add_properties_to_geojson import add_csv_data_to_state_geojson as add
    > add('us_census_state_2018_geo.json', 'preloaded_state_data.csv', 'preloaded_state_data.json')
    '''
    with open(source_geojson, 'r') as f:
        try:
            geojson = json.load(f)
        except AttributeError:
            geojson = json.loads(f)

    with open(source_csv) as f:
        reader = csv.reader(f)
        csv_list = list(reader)
    headers = csv_list[0]
    try:
        geojson['choropleth_properties'].extend(headers[1:])
    except KeyError:
        geojson['choropleth_properties'] = headers[1:]

    for geojson_counter, state in enumerate(geojson['features']):
        csv_nested_row = [row for row in csv_list if row[0] in (state['properties']['STUSPS'], state['properties']['NAME'])]
        try:
            csv_row = csv_nested_row[0]
        except IndexError:
            continue
        for column_counter, column_value in enumerate(csv_row[1:]):
            geojson['features'][geojson_counter]['properties'][headers[column_counter+1]] = column_value

    filename = save_as if save_as else source_geojson
    with open(filename, 'w') as f:
        return json.dump(geojson, f)

        
def add_csv_data_to_county_geojson(source_geojson, source_csv, save_as):
    ''' This function will take a county-level geojson file and
    add properties to each county.  The name of each property will 
    be the column header. Duplicate properties will be over-written.
    Properties for unrecognized counties will be ignored. The first 
    column in the csv must indicate the 5-digit county FIPS code.
    '''
    with open(source_geojson, 'r') as f:
        try:
            geojson = json.load(f)
        except AttributeError:
            geojson = json.loads(f)

    with open(source_csv) as f:
        reader = csv.reader(f)
        csv_list = list(reader)
    headers = csv_list[0]
    try:
        geojson['choropleth_properties'].extend(headers[1:])
    except KeyError:
        geojson['choropleth_properties'] = headers[1:]

    for geojson_counter, county in enumerate(geojson['features']):
        csv_nested_row = [row for row in csv_list if row[0] == county['properties']['GEOID']]
        try:
            csv_row = csv_nested_row[0]
        except IndexError:
            continue
        for column_counter, column_value in enumerate(csv_row[1:]):
            geojson['features'][geojson_counter]['properties'][headers[column_counter+1]] = column_value

    filename = save_as if save_as else source_geojson
    with open(filename, 'w') as f:
        return json.dump(geojson, f)

