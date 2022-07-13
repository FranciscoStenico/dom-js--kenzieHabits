export default function creatStrutureHtmlModal(typeOfModal) {

    switch (typeOfModal) {
        case 'creatHabit' :
            console.log(typeOfModal)
            return createcreateHabitModal()
        case 'editHabit'   :
            console.log(typeOfModal)
           return createEditHabitModal()
        case 'editProfile' :
            console.log(typeOfModal)
           return createEditProfileModal()
        case 'delete'      :
            console.log(typeOfModal)
           return createDeleteModal()
    }

}


function createcreateHabitModal(){

    const formModal           = createHtmlElement('form', 'modal');

    const containerModalHeader = createHtmlElement('header', 'modal__header');

    const modalHeaderTitle       = createHtmlElement('h3', 'modal__title'); 

    const modalHeaderCloseButton   = createHtmlElement('img', 'modal__close');

    

    const boxActionHabitTitle          = createActionBox('input','Título', 'title', 'Digitar título') 

    const boxActionHabitDescription      = createActionBox('textarea','Descrição', 'description', 'Digitar descrição') 

    const boxActionHabitSelectorCategory   = createActionSelectBox('Categoria', 'category')

    const boxActionHabitButton               = createActionBoxButton('button', 'submit', 'modal__submit')



    const modalHeaderCreated = appropriatingTagsHeader('Criar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)

    formModal.append(
        containerModalHeader,
        boxActionHabitTitle,
        boxActionHabitDescription,
        boxActionHabitSelectorCategory,
        boxActionHabitButton,
    ) 
        
    return formModal
}

function createEditHabitModal() {

    const formModal           = createHtmlElement('form', 'modal');

    const containerModalHeader = createHtmlElement('header', 'modal__header');

    const modalHeaderTitle       = createHtmlElement('h3', 'modal__title'); 

    const modalHeaderCloseButton   = createHtmlElement('img', 'modal__close');

    

    const boxActionHabitTitle          = createActionBox('input','Título', 'title', 'Digitar título') 

    const boxActionHabitDescription      = createActionBox('textarea','Descrição', 'description', 'Digitar descrição') 

    const boxActionHabitSelectorCategory   = createActionSelectBox('Categoria', 'category')

    const boxActionHabitButton               = createActionBoxButton('button', 'submit', 'modal__submit')



    const modalHeaderCreated = appropriatingTagsHeader('Criar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)

    formModal.append(
        containerModalHeader,
        boxActionHabitTitle,
        boxActionHabitDescription,
        boxActionHabitSelectorCategory,
        boxActionHabitButton,
    ) 
        
    return formModal
}

function createEditProfileModal() {
    modalTagsContainer()
}

function createDeleteModal() {
    modalTagsContainer()
}


const bodyDocument = document.querySelector('body')

function createHtmlElement(element, classList){
    const tag = document.createElement(element);
    
    tag.classList = classList;

    return tag;
}


function settingAtributesTextActionBox(tagToSet, setAttributeId, setAttributePlaceholder) {
    const tag = tagToSet

    tag.name        = 'content'
    tag.id          = setAttributeId
    tag.cols        = '50'
    tag.rows        = '10'
    tag.placeholder = setAttributePlaceholder

    return tag
}

function settingAtributesImg(tagToSet, setAttributeSrc, setAttributeAlt, setAttributeType) {
    const tag = tagToSet

    tag.src  = setAttributeSrc
    tag.alt  = setAttributeAlt
    tag.type = setAttributeType

    return tag
}

function appropriatingTagsHeader(actionOfmodalTitle, modalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal) {

    modalHeaderCloseButton = settingAtributesImg(modalHeaderCloseButton, './src/assets/X.png', 'close Icon', 'button')
    modalHeaderCloseButton.addEventListener('click', () => {
        bodyDocument.removeChild(formModal)
    });

    modalHeaderTitle = createHeaderTitle(modalHeaderTitle, actionOfmodalTitle)

    modalHeader.append(modalHeaderTitle, modalHeaderCloseButton)

    return modalHeader
    
}

function createHeaderTitle(tagToSet, textToSet) {
    const tag     = tagToSet 

    tag.innerText = textToSet

    return tag
}

function setInnerTextHtml(tagToSet, textToSet) {
    const tag     = tagToSet 

    tag.innerText = textToSet

    return tag
}

function createActionBox(textType, actionTypeTitle, classListActionType, placeholder) {

    let containerActionBox  = createHtmlElement('div', `box__actions ${classListActionType}`);
    let actionBoxTitle      = createHtmlElement('span', 'title');
    let labelActionBox      = createHtmlElement('label', classListActionType);
    let textActionBox       = createHtmlElement(textType, `textArea ${classListActionType}`);  
    
    actionBoxTitle     = setInnerTextHtml(actionBoxTitle, actionTypeTitle)
    
    labelActionBox.name = classListActionType
    
    textActionBox      = settingAtributesTextActionBox(textActionBox, classListActionType, placeholder)

    containerActionBox.append(actionBoxTitle, labelActionBox, textActionBox)

    return containerActionBox
}

function appropriatingTagsOption(listOptionToCreate) {

    const optionsCreated  = []

    listOptionToCreate.forEach( option => {
        const tag   = createHtmlElement('option', 'option.select');
        tag.value    = option
        tag.innerText = option
        optionsCreated.push(tag)
    });

    return optionsCreated
}

function createActionSelectBox(actionTypeTitle, classListActionType) {

    const habitOptions = ['Saúde', 'Estudos', 'Casa', 'Trabalho', 'Lazer']

    let containerActionBox  = createHtmlElement('div', `box__actions ${classListActionType}`);
    let actionBoxTitle      = createHtmlElement('span', 'title');
    let actionBoxSelect     = createHtmlElement('select', `textArea ${classListActionType}`);
    let actionBoxtOptions   = appropriatingTagsOption(habitOptions);
    
    actionBoxTitle     = setInnerTextHtml(actionBoxTitle, actionTypeTitle)
    
    actionBoxSelect.append(...actionBoxtOptions)

    containerActionBox.append(actionBoxTitle, actionBoxSelect)

    return containerActionBox

}

function createActionBoxButton(element, buttonType, classList) {
    const button = createHtmlElement(element, classList)
    button.type  = buttonType
    button.name  = 'modalData'
    button.innerText = 'Inserir'
    
    return button
}

// Evento de Click

const bodyDocumentContainer = document.querySelector('body')
const callModal = document.querySelector('#buttonCriarHabito') // peguei o ID do Butão!

callModal.forEach(button => {
    button.addEventListener('click', (event) => {
        const typeOfButton = event.target.value
        const modalCreateHabit = creatStrutureHtmlModal(typeOfButton)
        bodyDocumentContainer.append(modalCreateHabit)
        console.log(typeOfButton)
    });
});
    