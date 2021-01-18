let app = new Vue({
  el: '#app',
  data: {
    firstName: 'andy',
    lastName: 'geraldo',
    message: 'hello',
    tasks: '',
    newTask: '',
    addTask(){
      this.tasks.push(this.newTask)
    },
    showTasks(){
      axios.get('http://localhost:3000/tasks')
      .then(response => {
        console.log(response.data.tasks)
        this.tasks = response.data.tasks 
      })
      .catch(err => {
        console.log(err)
      })
    },
  },
  computed: {
    getFullName() {
      return `${this.firstName} ${this.lastName}`
      // return this.firstName.split('').reverse().join('')
    }
  },
  create(){
    this.showTasks()
  }
})

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})