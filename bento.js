function createLinkForm(){
    const root = {
        container: document.createElement('div'),
        urlField: document.createElement('input'),
        titleField: document.createElement('input'),
        descriptionField: document.createElement('input'),
        removeButton: document.createElement('button')
    }

    root.container.classList.add('link')
    root.container.appendChild(root.removeButton)
    root.container.appendChild(root.urlField)
    root.container.appendChild(root.titleField)
    root.container.appendChild(root.descriptionField)

    root.urlField.placeholder = 'Link'
    root.urlField.name = 'url-field'
    root.titleField.placeholder = 'Title'
    root.titleField.name = 'title-field'
    root.descriptionField.placeholder = 'Description'
    root.descriptionField.name = 'description-field'
    root.removeButton.innerText = 'Remove'

    root.removeButton.addEventListener('click', () => {
        root.container.remove()
    })

    return root.container
}

function main(){
    const links = document.getElementById('links')
    links.appendChild(createLinkForm())
}

main()