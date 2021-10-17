import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.ListTodos
        // currentListTodo.push(todo)
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
            // listTodos:currentListTodo
        })
        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListTodos
        currentTodos = currentTodos.filter(item => item.id != todo.id)
        // ham filter duyet qua va loc phan tu khong thoa man dieu kien tra lai nhung phan tu thoa man dieu kien
        this.setState({
            ListTodos: currentTodos
        })
        toast.success("Delete succed!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, ListTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id == todo.id) {
            let ListTodosCopy = [...ListTodos]
            //Find index of specific object using findIndex method.    
            let objIndex = ListTodosCopy.findIndex((item => item.id == todo.id))
            ListTodosCopy[objIndex].title = editTodo.title
            this.setState({
                ListTodos: ListTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succed!")
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })

    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })

    }
    render() {
        let { ListTodos, editTodo } = this.state
        // let listTodos = this.state.listTodos
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('check empty obj : ', isEmptyObj)
        return (
            <>
                <p>
                    Simple ToDo App with reactjs (Ha Van Duc  &amp; HoiDanIT)
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {ListTodos && ListTodos.length > 0 &&
                            ListTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {
                                            isEmptyObj === true ?
                                                <span> {index + 1} - {item.title} </span>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <span> {index + 1} - <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        /></span>
                                                        :
                                                        <span> {index + 1} - {item.title} </span>
                                                    }
                                                </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'save' : 'edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        > Delete </button>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </>
        )

    }
}

export default ListTodo