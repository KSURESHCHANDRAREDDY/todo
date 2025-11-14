import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  handleDelete = () => {
    const {send, fun} = this.props
    fun(send.id)
  }

  render() {
    const {send} = this.props
    const {title} = send

    return (
      <li className="todoitem">
        <p>{title}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}

export default TodoItem
