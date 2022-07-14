import Event from "../Controllers/event.controllers.js";

export default class Modals {
  static eventId = localStorage.getItem("@kenzie-habits: eventId");
  static creatStructure(typeOfModal) {
    switch (typeOfModal) {
      case "Criar hábito":
        return this.create();
      case "Editar hábito":
        return this.editHabit();
      case "Editar perfil":
        return this.editProfile();
      case "Excluir hábito":
        return this.delete();
    }
  }

  //----------Elemento pai dos Modais------------------------------------------------

  static bodyDocument = document.querySelector(".modal__container");

  //----------Criação das tags HTML--------------------------------------------------

  static createHtmlElement(element, classList) {
    const tag = document.createElement(element);
    tag.classList = classList;

    return tag;
  }

  static createActionBox(
    textType,
    actionTypeTitle,
    classListActionType,
    placeholder,
    identification,
    nameContent
  ) {
    let containerActionBox = this.createHtmlElement(
      "div",
      `box__actions ${classListActionType}`
    );
    let containerlabel = this.createHtmlElement(
      "label",
      `title ${classListActionType}`
    );
    let textActionBox = this.createHtmlElement(
      textType,
      `textArea ${classListActionType}`
    );

    textActionBox.id = identification;

    containerlabel = this.setInnerTextHtml(containerlabel, actionTypeTitle);

    containerlabel.append(textActionBox);

    textActionBox = this.settingAtributesTextActionBox(
      textActionBox,
      classListActionType,
      placeholder,
      nameContent
    );

    containerActionBox.append(containerlabel);

    return containerActionBox;
  }

  static createActionBoxButton(
    element,
    placeholder,
    buttonType,
    classList,
    buttonValue,
    identification
  ) {
    const button = this.createHtmlElement(element, classList);
    button.type = buttonType;
    button.name = "modalData";
    button.id   = identification;
    buttonValue === "" ? buttonValue : (button.value = buttonValue);
    !placeholder ? placeholder : (button.innerText = placeholder);

    return button;
  }

  static setInnerTextHtml(tagToSet, textToSet) {
    const tag = tagToSet;
    tag.innerText = textToSet;

    return tag;
  }

  static settingAtributesTextActionBox(
    tagToSet,
    setAttributeId,
    setAttributePlaceholder,
    nameContent
  ) {
    const tag = tagToSet;

    tag.name = nameContent;
    tag.id = setAttributeId;
    tag.style.resize = "none";
    tag.placeholder = setAttributePlaceholder;

    return tag;
  }

  //----------Tags Options-----------------------------------------------------------------

  static appropriatingTagsOption(listOptionToCreate) {
    const optionsCreated = [];

    listOptionToCreate.forEach((option) => {
      const tag = this.createHtmlElement("option", "option.select");
      tag.value = option;
      tag.innerText = option;
      optionsCreated.push(tag);
    });

    return optionsCreated;
  }

  static createActionSelectBox(actionTypeTitle, classListActionType) {
    const habitOptions = ["Saúde", "Estudos", "Casa", "Trabalho", "Lazer"];

    let containerActionBox = this.createHtmlElement(
      "div",
      `box__actions ${classListActionType}`
    );
    let actionBoxTitle = this.createHtmlElement("span", "title");
    let actionBoxSelect = this.createHtmlElement(
      "select",
      `textArea ${classListActionType}`
    );

    let actionBoxtOptions = this.appropriatingTagsOption(habitOptions);
    actionBoxTitle = this.setInnerTextHtml(actionBoxTitle, actionTypeTitle);

    actionBoxSelect.append(...actionBoxtOptions);
    containerActionBox.append(actionBoxTitle, actionBoxSelect);

    return containerActionBox;
  }

  //----------Criação dos modais------------------------------------------------------------

  static create() {
    // BLOCOS NECESSARIS PARA MODAL CRIAR HABITO

    // bloco container
    const formModal = this.createHtmlElement("form", "modal creatHabit");

    // bloco caixas de ação
    const boxActionHabitTitle = this.createActionBox(
      "input",
      "Título",
      "title",
      "Digitar título"
    );
    const boxActionHabitDescription = this.createActionBox(
      "textarea",
      "Descrição",
      "description",
      "Digitar descrição"
    );
    const boxActionHabitSelectorCategory = this.createActionSelectBox(
      "Categoria",
      "category"
    );
    const boxActionHabitButton = this.createActionBoxButton(
      "button",
      "Inserir",
      "submit",
      "modal__submit",
      "",
      "buttonIdTeste"
    );

    // implementando corpo de modal ao container
    formModal.append(
      // modalHeaderCreated,
      boxActionHabitTitle,
      boxActionHabitDescription,
      boxActionHabitSelectorCategory,
      boxActionHabitButton
    );

    // retornando modal completo
    return formModal;
  }

  static editHabit() {
    // BLOCOS NECESSARIS PARA MODAL EDITAR HABITO

    // Elemento necessario para atribuir o modal a tela
    const modalScreen = document.querySelector(".modal-screen");

    // bloco container
    const formModal = this.createHtmlElement("form", "modal editHabit");

    // bloco caixas de ação
    const boxActionHabitTitle = this.createActionBox(
      "input",
      "Título",
      "title",
      "Tarefa a ser editada"
    );

    const boxActionHabitDescription = this.createActionBox(
      "textarea",
      "Descrição",
      "description",
      "Descrição a ser editada"
    );
    const boxActionHabitSelectorCategory = this.createActionSelectBox(
      "Categoria",
      "category"
    );

    const containerActionCheckbox = this.createHtmlElement(
      "fieldset",
      "container__action checkbox"
    );
    let containerActionTitleCheckbox = this.createHtmlElement(
      "label",
      "title checkbox"
    );
    containerActionTitleCheckbox = this.setInnerTextHtml(
      containerActionTitleCheckbox,
      "Status"
    );
    const actionCheckbox = this.createActionBoxButton(
      "input",
      null,
      "checkbox",
      "status__checkbox",
      ""
    );
    containerActionCheckbox.append(
      containerActionTitleCheckbox,
      actionCheckbox
    );

    const containerActionHabitButton = this.createHtmlElement(
      "div",
      "container__box button"
    );
    const boxActionHabitButtonDelete = this.createActionBoxButton(
      "button",
      "Excluir",
      "button",
      "modal__submit delete",
      "Excluir hábito"
    );
    boxActionHabitButtonDelete.addEventListener("click", Event.modalDelete);

    const boxActionHabitButtonSave = this.createActionBoxButton(
      "button",
      "Salvar",
      "button",
      "modal__submit save",
      ""
    );
    containerActionHabitButton.append(
      boxActionHabitButtonDelete,
      boxActionHabitButtonSave
    );

    // Adicionando addEventListener ao butao excluir
    boxActionHabitButtonDelete.addEventListener("click", () => {
      // this.delete()
      // this.bodyDocument.removeChild(formModal)
    });

    // Adicionando addEventListener ao butao excluir
    boxActionHabitButtonSave.addEventListener("click", () => {
      modalScreen.classList.toggle("modal-open");
      this.bodyDocument.removeChild(formModal);

      //Requisiçao da API para salvar
      console.log("Sucesso");
    });

    // implementando corpo de modal ao container
    formModal.append(
      // modalHeaderCreated,
      boxActionHabitTitle,
      boxActionHabitDescription,
      boxActionHabitSelectorCategory,
      containerActionCheckbox,
      containerActionHabitButton
    );

    // retornando modal completo
    return formModal;
  }

  static editProfile() {
    const modalContainer = document.querySelector(".modal__container");
    modalContainer.classList.add("flat");
    // BLOCOS NECESSARIS PARA MODAL EDITAR PROFILE

    // bloco container
    const formModal = this.createHtmlElement("form", "modal editProfile");

    // bloco caixas de ação
    const boxActionHabitTitle = this.createActionBox(
      "input",
      "Nome de usuario",
      "title",
      "Novo nome",
      'edit',
      'newUserName'
    );

    const boxActionHabitDescription = this.createActionBox(
      "input",
      "URL da imagem do perfil",
      "modal__editImg",
      "Nova foto de perfil",
      "3",
      'newUrl'
    );

    const createActionBoxButtonSalvarPerfil = this.createActionBoxButton(
      "button",
      "Salvar alterações",
      "submit",
      "modal__submit",
      "",
      "btnSave"
    );

    // implementando corpo de modal ao container
    formModal.append(
      // modalHeaderCreated,
      boxActionHabitTitle,
      boxActionHabitDescription,
      createActionBoxButtonSalvarPerfil
    );

    // retornando modal completo
    return formModal;
  }

  static delete() {
    const modalContainer = document.querySelector(".modal__container");
    modalContainer.classList.add("flat");
    // BLOCOS NECESSARIS PARA MODAL DELETAR HABITO

    // bloco container
    const formModal = this.createHtmlElement("form", "modal modal--delete");

    const alertContainer = this.createHtmlElement(
      "div",
      "modal__alert-container--delete"
    );
    // bloco caixas de ação
    let deleteDescriptionTitle = this.createHtmlElement(
      "h2",
      "title--delete-habit actionInforme"
    );
    let deleteDescription = this.createHtmlElement(
      "p",
      "description--delete-habit"
    );
    deleteDescriptionTitle = this.setInnerTextHtml(
      deleteDescriptionTitle,
      "Certeza que deseja excluir este hábito?"
    );
    deleteDescription = this.setInnerTextHtml(
      deleteDescription,
      "Após executar essa ação não será possível desfazer"
    );

    alertContainer.append(deleteDescriptionTitle, deleteDescription);

    const conntainerDeleteButtonCancel = this.createHtmlElement(
      "div",
      "container__box button"
    );

    const deleteButtonCancel = this.createActionBoxButton(
      "button",
      "Cancelar",
      "submit",
      "modal__submit cancel"
    );
    deleteButtonCancel.addEventListener("click", Event.returnModal);

    const deleteButtonConfirme = this.createActionBoxButton(
      "button",
      "Sim, excluir este hábito",
      "submit",
      "modal__submit deleteConfirm"
    );
    deleteButtonConfirme.addEventListener("click", (e) => {
      e.preventDefault();

      setTimeout(() => {
        console.log(this.eventId);
        // localStorage.removeItem("@kenzie-habits: eventId");
      }, 200);
    });

    conntainerDeleteButtonCancel.append(
      deleteButtonCancel,
      deleteButtonConfirme
    );

    // implementando corpo de modal ao container
    formModal.append(alertContainer, conntainerDeleteButtonCancel);

    // retornando modal completo
    return formModal;
  }
}

//Made by Daniel Marques (dev7)
