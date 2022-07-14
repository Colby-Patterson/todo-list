import React from "react";
import { Button, Container, Divider, Form, Header, Input, List, Segment } from "semantic-ui-react";

export default class TodoList extends React.Component {
  state = { name: '', todos: ["work", "sleep"] }
  handleSubmit = () => {
    let newTodos = [this.state.name, ...this.state.todos]
    this.setState({
      todos: newTodos,
      name: ''
    })
  }
  render() {
    return (
      <Container>

        <Segment>
          <Header as='h1'>TodoList</Header>
          <Form onSubmit={this.handleSubmit}>
            <Input label='Todo name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })} />
            <Divider />
            <Button type='submit' color="blue">Add</Button>
          </Form>
          <Divider />
          <List>
            {this.state.todos.map(t => <List.Item key={t}>{t}</List.Item>)}
          </List>
        </Segment>
      </Container>
    )
  }
}