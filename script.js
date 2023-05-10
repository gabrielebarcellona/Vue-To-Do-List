/*Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.*/

const app = Vue.CreateApp({
    data(){
        return{
            todos :[
                {
                    text : 'ciao sono pippo',
                    done : false,
                },
                 {
                    text : 'ciao sono michele',
                    done : false,
                },
    
                 {
                    text : 'ciao sono pincopallino',
                    done : false,
                },
                  {
                    text : 'ciao sono enrico',
                    done : true,
                },
                 {
                    text : 'ciao sono giorgio',
                    done : true,
                },
            ],

        
        };
    },
    methods:{
        addTodo() {
            let cleanedTodo = this.newTodoText.trim();
            if(cleanedTodo.length >= 5){
                this.todos.unshift({
                    text:this.newTodoText,
                    done:false,
                });
                this.newTodoText = '';
                
            }
        },
        deleteItem(index){
            this.todos.splice(index,1);
        },
        
    }
})

app.mount('.list-group');