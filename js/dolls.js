let dollList = [
    {
        Id: 1,
        Name: "Yuyu",
        Image: "dolls/Yuyu.jpg",
        DOB: "28/10/2022",
        Price: 300
    }
]

function deleteDoll(dollId) {
    dollList.splice(dollId - 1, 1)
    let doll = document.getElementById("doll" + dollId);
    console.log(doll);
    doll.remove();
}

function clearInputField() {
    document.getElementById('dollId').value = "";
    document.getElementById('Name').value = "";
    document.getElementById('Image').value = "";
    document.getElementById('DOB').value = "";
    document.getElementById('Price').value = "";
}

function newDoll() {
    let doll = {
        Id: document.getElementById('dollId').value,
        Name: document.getElementById('Name').value,
        Image: document.getElementById('Image').value,
        DOB: document.getElementById('DOB').value,
        Price: document.getElementById('Price').value
    };

    dollList.push(doll)

    document.getElementById("tbody").innerHTML += `<tr id=${"doll" + doll.Id}>
        <th scope="row">${doll.Id}</th>
        <td>
        <div class="d-flex justify-content-between" style="width:70%">
            <i class="bi-pencil-square" onclick='editDollModal(${doll.Id}, "${doll.Name}", "${doll.Image}", "${doll.DOB}", ${doll.Price})'></i>
            <i class="bi-trash-fill" onclick='deleteDoll(${doll.Id})'></i>
        </div>
        </td>
        <td>
            <img src=${doll.Image} width=150></img>
        </td>
        <td>${doll.Name}</td>
        <td>${doll.DOB}</td>
        <td>${doll.Price}&nbsp;Baht</td>
    </tr>`
}

function newDollModal() {
    var modal = document.getElementById('myModal');
    var bootstrapModal = new bootstrap.Modal(modal);
    document.getElementById("myModalLabel").innerHTML = "New Doll Info"

    console.log(dollList[dollList.length - 1])
    nextId = parseInt(dollList[dollList.length - 1].Id) + 1

    clearInputField()

    document.getElementById('dollId').value = nextId;
    document.getElementById('Name').placeholder = "name";
    document.getElementById('Image').placeholder = "dolls/picname.jpg";
    document.getElementById('DOB').placeholder = "dd/mm/yyyy";
    document.getElementById('Price').placeholder = "xxx.xx";

    document.getElementById('saveChangesButton').onclick = function () {
        newDoll(
            nextId,
            document.getElementById('Name').value,
            document.getElementById('Image').value,
            document.getElementById('DOB').value,
            document.getElementById('Price').value
        );
        bootstrapModal.hide();
    };

    bootstrapModal.show();
}

function editDoll() {
    let doll = {
        Id: document.getElementById('dollId').value,
        Name: document.getElementById('Name').value,
        Image: document.getElementById('Image').value,
        DOB: document.getElementById('DOB').value,
        Price: document.getElementById('Price').value
    };

    dollList[parseInt(doll.Id) - 1] = doll
    console.log(dollList[parseInt(doll.Id) - 1])

    let dollRecord = document.getElementById("doll" + doll.Id);
    if (dollRecord) {
        dollRecord.innerHTML = `<tr id=${"doll" + doll.Id}>
        <th scope="row">${doll.Id}</th>
        <td>
        <div class="d-flex justify-content-between" style="width:70%">
            <i class="bi-pencil-square" onclick='editDollModal(${doll.Id}, "${doll.Name}",
            "${doll.Image}", "${doll.DOB}", ${doll.Price})'></i>
            <i class="bi-trash-fill" onclick='deleteDoll(${doll.Id})'></i>
        </div>
        </td>
        <td>
            <img src=${doll.Image} width=150></img>
        </td>
        <td>${doll.Name}</td>
        <td>${doll.DOB}</td>
        <td>${doll.Price}&nbsp;Baht</td>
    </tr>`
    }
}

function editDollModal(dollId, name, image, dob, price) {
    var modal = document.getElementById('myModal');
    var bootstrapModal = new bootstrap.Modal(modal);
    document.getElementById("myModalLabel").innerHTML = "Edit Doll Info"

    clearInputField()

    console.log(dollList[0])
    document.getElementById('dollId').value = dollId;
    document.getElementById('Name').placeholder = dollList[dollId - 1].Name;
    document.getElementById('Image').placeholder = dollList[dollId - 1].Image;
    document.getElementById('DOB').placeholder = dollList[dollId - 1].DOB;
    document.getElementById('Price').placeholder = dollList[dollId - 1].Price;

    document.getElementById('saveChangesButton').onclick = function () {
        editDoll(
            dollId,
            document.getElementById('Name').value,
            document.getElementById('Image').value,
            document.getElementById('DOB').value,
            document.getElementById('Price').value
        );
        bootstrapModal.hide();
    };

    bootstrapModal.show();
}