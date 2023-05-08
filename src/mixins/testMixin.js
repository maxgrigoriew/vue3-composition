export default {
  created() {
    console.log('created')
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}
