export default ({ component, option }) => {
  let resolveComponent;
  return () => ({
    component: component(),
    delay: 400,
    loading: {
      mounted() {
        this.load()
      },
      data(){
        return {}
      },
      render(h) {
        return h("loading", {
          props: {
            height: "300px"
          }
        })
      },
      methods: {
        load() {
          // component().then(resolveComponent)
        }
      }
    }
  });
}  
