
export default class todo {
    constructor(){
        this.todos = this.traer()
        if(!this.todos) this.todos = []; //En el caso de que no haya nada, se crea un array vacio
        this.view = 'all';
    }
    addTodo(description, key, completed){
        let todo = {
            description,
            key,
            completed
        }
        this.todos.push(todo);


        this.see(this.view);
    }
    traer(){
        return JSON.parse(localStorage.getItem('todoList'));//se pasa a objeto
    }
    see(view){

        let principal = document.getElementById('principalTODO');
        principal.innerHTML = "";
        this.view = view;

        for(this.index of this.todos){


            switch(view){
                case 'all':
                    let div = document.createElement('div');
                    div.setAttribute('key',this.index.key);

                    if(this.index.completed){
                        div.innerHTML = `<input type="checkbox" key="${this.index.key}" checked>
                                    <p>${this.index.description}</p>
                                    <button class="del" key="${this.index.key}"><svg key="${this.index.key}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path key="${this.index.key}" d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"/></svg></button>`;
                    }
                    else{
                        div.innerHTML = `<input type="checkbox" key="${this.index.key}">
                                    <p>${this.index.description}</p>
                                    <button class="del" key="${this.index.key}"><svg key="${this.index.key}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path key="${this.index.key}" d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"/></svg></button>`;
                    }
                    let fragment = document.createDocumentFragment();
                    fragment.append(div);
        
                    principal.appendChild(fragment);
                    break;

                case 'active':
                    if(!this.index.completed){
                        let div = document.createElement('div');
                        div.setAttribute('key',this.index.key);

                        div.innerHTML = `<input type="checkbox" key="${this.index.key}">
                                    <p>${this.index.description}</p>
                                    <button class="del" key="${this.index.key}"><svg key="${this.index.key}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path key="${this.index.key}" d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"/></svg></button>`;
                                    let fragment = document.createDocumentFragment();
                                    fragment.append(div);
                        
                                    principal.appendChild(fragment);
                    }
                    break;
                
                case 'completed':
                    if(this.index.completed){
                        let div = document.createElement('div');
                        div.setAttribute('key',this.index.key);

                        div.innerHTML = `<input type="checkbox" key="${this.index.key}" checked>
                                    <p>${this.index.description}</p>
                                    <button class="del" key="${this.index.key}"><svg key="${this.index.key}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path key="${this.index.key}" d="M15,2H9C7.897,2,7,2.897,7,4v2H3v2h2v12c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-4V4C17,2.897,16.103,2,15,2z M9,4h6v2H9V4z M17,20H7V8h1h8h1V20z"/></svg></button>`;
                        
                        let fragment = document.createDocumentFragment();
                        fragment.append(div);

                        principal.appendChild(fragment);
                    }

            }
        }
    }
    mount(){
        return this.todos.length;
    }
    keys(){
        let arr = [];

        for(let index of this.todos) arr.push(index.key);
        
        return arr;
    }
    save(){
        localStorage.setItem('todoList',JSON.stringify(this.todos));
    }
    remove(key){
        for(let i in this.todos){
            if(this.todos[i].key == key){
                this.todos.splice(i,1);
                break;
            }
        }
        this.see(this.view);
        this.save();
    }
    
    complete(key){
        for(let i in this.todos){
            if(this.todos[i].key == key){
                this.todos[i].completed = !this.todos[i].completed;
                break;
            }
        }
        this.save();
    }

    
}
 