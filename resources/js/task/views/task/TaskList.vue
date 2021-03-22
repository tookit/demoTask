<template>
  <div class="page-task">
    <v-container>
      <v-row>
        <v-col :cols="3">
          <v-autocomplete 
            :items="getProjectList"
            outlined
            hide-details
            label="Select project"
            @change="handleProjectChange"
            v-model="filter['filter[project_id]']"
          />             
        </v-col>
        <v-col cols="12">
          <v-card tile>
            <v-toolbar flat height="64">
              <v-text-field
                v-model="filter['filter[name]']"
                text
                solo
                flat
                :prepend-icon="
                  showFilter ? 'mdi-filter-variant-plus' : 'mdi-filter-variant'
                "
                append-icon="mdi-magnify"
                placeholder="Search Task"
                hide-details
                clearable
                @keyup.enter="handleApplyFilter"
                @click:append="handleApplyFilter"
                @click:prepend="showFilter = !showFilter"
                @click:clear="handleClear"
              />              
              <v-btn icon @click="handleRefreshItem">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <v-btn icon @click="handleCreateItem">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider />
            <v-card v-show="showFilter" flat class="grey lighten-4">
              <v-card-text>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="handleResetFilter">Reset</v-btn>
                <v-btn tile color="primary" @click="handleApplyFilter"
                  >Apply</v-btn
                >
              </v-card-actions>
            </v-card>            
            <v-card-text class="pa-0">
              <v-grid
                :loading="loadingItems"
                :headers="headers"
                :items="items"
                :items-per-page-options="[15, 30, 50]"
                :server-items-length="serverItemsLength"
                :items-per-page="itemsPerPage"
                :page.sync="filter['page']"
                item-key="id"
                show-select
                @update:page="handlePageChanged"
              >
                <template v-slot:[`item.avatar`]="{ item }">
                  <c-avatar class="my-3" :username="item.username" />
                </template>
                <template v-slot:[`item.action`]="{ item }">
                  <v-menu>
                    <template v-slot:activator="{ on: menu }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-btn icon v-on="onTooltip({ ...tooltip, ...menu })">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <span>Action</span>
                      </v-tooltip>
                    </template>
                    <v-list class="pa-0" dense>
                      <v-list-item
                        v-for="action in actions"
                        :key="action.text"
                        @click="action.click(item)"
                      >
                        <v-list-item-icon class="mr-2">
                          <v-icon small>{{ action.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ action.text }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-grid>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="showDialog" scrollabe width="640">
      <task-form :item="selectedItem" @form:success="handleFormSuccess" />
    </v-dialog>
  </div>
</template>

<script>
import TooltipMixin from '@/mixins/Tooltip'
import TaskForm from "./TaskForm";
import VGrid from '@/components/grid/VGrid.js'
import Sortable, { Swap } from "sortablejs"
import { mapGetters } from 'vuex';
Sortable.mount(new Swap())

export default {
  components: {
    TaskForm,
    VGrid
  },
  mixins: [TooltipMixin],
  data() {
    return {
      showDialog: false,
      search: '',
      loadingItems: false,
      selectedItem: null,
      serverItemsLength: 0,
      itemsPerPage: 15,
      showFilter: true,
      filter: {
        page: 1,
        'filter[name]': null,
        'filter[project_id]': null,
      },
      headers: [
        {
          text: 'Project',
          value: 'project.name'
        },
        {
          text: 'Task',
          value: 'name'
        },
        {
          text: 'Priority',
          value: 'priority'
        },        
        {
          text: 'Created_at',
          value: 'created_at'
        },
        {
          text: 'Action',
          value: 'action'
        }
      ],
      items: [],
      actions: [
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
          click: this.handleEditItem
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
          click: this.handleDeleteItem
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getProjectList'])
  },
  watch: {
    '$route.query': {
      handler(query) {
        const filter = this.updateFilterQuery(query)
        this.fetchRecords(filter)
        this.fetchProjects()
      },
      immediate: true
    }
  },
  methods: {
    //
    updateFilterQuery(query) {
      const filter = Object.assign(this.filter, query)
      filter.page = parseInt(filter.page)
      return filter
    },
    resetFilter() {
      this.filter = {
        page: 1,
        'filter[name]': null
      }
    },
    fetchProjects() {
      return this.$store
        .dispatch('fetchProject')
        .then(({ data }) => {
          this.projects = data
        })
        .catch(() => {
          this.loadingItems = false
        })
    },
    fetchRecords(query) {
      this.loadingItems = true
      this.items = []
      return this.$store
        .dispatch('fetchTask', query)
        .then(({ data, meta }) => {
          this.items = data
          this.serverItemsLength = meta.total
          this.loadingItems = false
        })
        .catch(() => {
          this.loadingItems = false
        })
    },
    //action
    handleCreateItem() {
      this.selectedItem = null,
      this.showDialog = true
    },
    handleViewItem() {},
    handleEditItem(item) {
      this.selectedItem = item,
      this.showDialog = true
    },
    handleDeleteItem(item) {
      if (window.confirm("Are u sure to delete this")) {
        this.$store.dispatch('deleteTask', item.id).then(() => {
          this.fetchRecords(this.filter)
        })
      }
    },
    handleSubmit() {},
    handleRefreshItem() {
      this.fetchRecords(this.filter)
    },
    // filter
    handlePageChanged(page) {
      this.filter.page = page
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleProjectChange(item) {
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleResetFilter() {
      this.filter = {
        page: 1,
        'filter[name]': null,
        'filter[project_id]': null,
        t: Date.now()
      }
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleApplyFilter() {
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleClear() {
      this.resetFilter()
      this.filter.t = Date.now()
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      })
    },
    handleFormSuccess() {
      this.showDialog = false,
      this.fetchRecords(this.filter)
    },
    initSortable() {
      this.$nextTick(() => {
        const sortable = new Sortable(
          document.querySelector(".v-data-table__wrapper > table > tbody"),
          {
            draggable: "tr",
            swap: true, // Enable swap plugin
            swapClass: "highlight", // The class applied to the hovered swap item
            animation: 150,
            onSort: e => {
              const { item, swapItem } = e;
              const source = item.dataset.id;
              const target = swapItem.dataset.id;
              const data = {  source, target }
              this.$store.dispatch('swapOrder', data).then(() => {
                this.snackbar = {
                  show: true,
                  text: "order swaped",
                  color: "success"
                };
                this.fetchRecords();
              });
            }
          }
        );
      });
    }    
  },
  created() {
    this.initSortable()
  }
}
</script>
