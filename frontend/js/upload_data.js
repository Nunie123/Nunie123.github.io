addUploadEventListener()

function addUploadEventListener() {

    let button = document.getElementById('upload-file-button');
    button.addEventListener('click', function () {
        showFileUploadOptions()
    });
};

function showFileUploadOptions() {
    let uploadInput = document.getElementById('file-import');
    let file = null;
    if (uploadInput.files.length > 0) {
        file = uploadInput.files[0];
    };
    if (!file) {
        console.log('no file!');
        return null;
    };
    populateFormWithParsedData(file, 'import-modal-body');
};

function populateFormWithParsedData(file, elementId) {
    Papa.parse(file, {
        preview: 5,
        complete: function (results) {
            let data = results.data;
            element = removeChildren(elementId);
            appendFieldMapper(data, element);
            appendUploadAsTable(data, element);
        }
    });
};

function removeChildren(id){
    let el = document.getElementById(id);
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        };
    return el;
};

function appendFieldMapper(data, element){
    let form = document.createElement('form');
    form.setAttribute('id', 'field-mapper-form');
    element.appendChild(form);
    let fieldNames = data[0];
    let headerDiv = document.createElement('div');
    headerDiv.className = 'row field-mapper-headers';
    form.appendChild(headerDiv);
    let fieldNameHeader = document.createElement('div');
    fieldNameHeader.className = 'col-sm-4';
    fieldNameHeader.textContent = 'Imported Field'
    headerDiv.appendChild(fieldNameHeader);
    let displayNameHeader = document.createElement('div');
    displayNameHeader.className = 'col-sm-4';
    displayNameHeader.textContent = 'Display Name'
    headerDiv.appendChild(displayNameHeader);
    let geoHeader = document.createElement('div');
    geoHeader.className = 'col-sm-2';
    geoHeader.textContent = 'Geographic Indicator'
    headerDiv.appendChild(geoHeader);
    let ignoreHeader = document.createElement('div');
    ignoreHeader.className = 'col-sm-2';
    ignoreHeader.textContent = 'Ignore This Field'
    headerDiv.appendChild(ignoreHeader);
    

    for(let i=0; i<fieldNames.length; i++){
        let outerDiv = document.createElement('div');
        outerDiv.className = 'form-group row';
        form.appendChild(outerDiv);
        let label = document.createElement('label');
        label.className = 'col-sm-4 col-form-label';
        label.textContent = fieldNames[i];
        outerDiv.appendChild(label);
        let displayNameDiv = document.createElement('div');
        displayNameDiv.className = 'col-sm-4';
        outerDiv.appendChild(displayNameDiv);
        let displayNameInput = document.createElement('input');
        displayNameInput.className = 'form-control'
        displayNameInput.setAttribute('type', 'text');
        displayNameInput.setAttribute('value', fieldNames[i].slice(0,30))
        displayNameInput.setAttribute('maxlength', '30');
        displayNameDiv.appendChild(displayNameInput);
        let geoFieldDiv = document.createElement('div');
        geoFieldDiv.className = 'col-sm-2 radio-div';
        outerDiv.appendChild(geoFieldDiv);
        let geoFieldInput = document.createElement('input');
        geoFieldInput.className = 'form-check-input';
        geoFieldInput.setAttribute('type', 'radio');
        geoFieldInput.setAttribute('name', 'geoRadio');
        geoFieldDiv.appendChild(geoFieldInput);
        let ignoreDiv = document.createElement('div');
        ignoreDiv.className = 'col-sm-2 checkmark-div';
        outerDiv.appendChild(ignoreDiv);
        let ignoreInput = document.createElement('input');
        ignoreInput.className = 'form-check-input';
        ignoreInput.setAttribute('type', 'checkbox');
        ignoreDiv.appendChild(ignoreInput);
    };

};

function appendUploadAsTable(data, element) {
    let div = document.createElement('div');
    div.className = 'row data-sample-title';
    div.textContent = 'Data Sample:'
    element.appendChild(div);
    let table = document.createElement('table');
    table.className = 'table table-sm sample-table'
    element.appendChild(table);
    let thead = document.createElement('thead');
    thead.className = 'thead-light';
    table.appendChild(thead);
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    let tableHeaders = data[0];
    for (let k = 0; k < tableHeaders.length; k++) {
        let th = document.createElement('th');
        th.textContent = tableHeaders[k];
        tr.appendChild(th);
    }
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i = 1; i < data.length; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        let rowData = data[i];
        for (let j = 0; j < rowData.length; j++) {
            let td = document.createElement('td');
            td.textContent = rowData[j];
            tr.appendChild(td);
        }
    }
    uploadButton = document.getElementById('upload-file-button');
    uploadButton.textContent = 'Complete Upload';
};

