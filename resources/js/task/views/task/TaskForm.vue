<template>
  <v-form-builder
    ref="builder"
    v-model="formModel"
    :title="formTitle"
    :items="formItems"
    :loading="loading"
    color="primary"
    show-header
    @form:submit="handleSubmit"
    @form:cancel="$emit('form:cancel')"
  />
</template>

<script>
import VFormBuilder from '@/components/builder/VFormBuilder'
import { VTextField, VAutocomplete } from 'vuetify/lib'
import { mapGetters } from 'vuex'
export default {
  name: 'TaskForm',
  components: {
    VFormBuilder,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      loading: false,
      formModel: {},
    }
  },
  computed: {
    ...mapGetters(['getProjectList']),
    formTitle() {
      return this.item ? 'Edit Task - ' + this.item.name : 'Create Task'
    },
    formItems() {
      return [
        {
          cols: 12,
          element: VAutocomplete,
          props: {
            name: 'project_id',
            items: this.getProjectList,
            required: true,
            outlined: true,
          },
        },

        {
          cols: 6,
          element: VTextField,
          props: {
            name: 'name',
            required: true,
            outlined: true,
            rules: [(v) => !!v || 'Task name is required'],
          },
        },
        {
          cols: 6,
          element: VTextField,
          props: {
            type: 'number',
            name: 'priority',
            outlined: true,
          },
        },        

      ]
    },
  },
  watch: {
    item: {
      handler(item) {
        this.formModel = item || {}
      },
      immediate: true,
    },
  },
  methods: {
    handleSubmit() {
      const form = this.$refs.builder.$refs.form
      if (form.validate()) {
        this.loading = true
        const data = this.transformData(this.formModel)
        if (this.item && this.item.id) {
          return this.$store
            .dispatch('updateTask', {
              id: this.item.id,
              data: data,
            })
            .then(() => {
              this.$emit('form:success')
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return this.$store
            .dispatch('createTask', data)
            .then(() => {
              this.$emit('form:success')
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        }
      }
    },
    transformData(data) {
      return data
    },
  },
}
</script>
