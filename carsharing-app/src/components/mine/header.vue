<template>
  <div class="navigator-wrapper linear-gradient-bg">
    <div class="navigator">
      <div class="nav-wrapper" :class ="{shadow:shadowActive}">
        <div  class="avatar-wrapper " @click="telephone_input">
          <!-- <Icon type="chevron-left" class="backto"></Icon> -->
           <span class="icon-close backto" @click.stop="close"  v-if="isClose"></span>
           <span class="icon-return backto" @click.stop=" backto_homepage()"  v-else></span>
                
          </span>
        </div>
       <span class="headertitle">{{headerText}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Icon1 from 'vue-awesome/components/Icon'
import { mapGetters, mapActions } from 'vuex'

export default {
  props :{
    headerText : "",
    isClose:false
  }
  ,
  computed: {
    ...mapGetters([
      'shadowActive',

    ])
  },
  components: {
    Icon1
  },
  methods: {
    ...mapActions([
      'telephone_input'
    ]),
    backto_homepage(key) {
      this.$router.go(-1);
    },
    close(){
      this.$router.push({path:"/home"});
    }
  }
}
</script>
<style>

</style>