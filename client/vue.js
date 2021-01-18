let app = new Vue({
  el: '#app',
  data: {
    msg: 'halo',
    tasks: [
      {
        title: 'mandi',
        category: 'Backlog'
      },
      {
        title: 'makan',
        category: 'Backlog'
      },
      {
        title: 'minum',
        category: 'Done'
      },
    ],
    page: 'login',
    categories: ['Backlog', 'Product', 'Development', 'Done'],
    changePage(newPage){
      this.page = newPage
    }
  }
})