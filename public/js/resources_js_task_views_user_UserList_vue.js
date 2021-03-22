(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_task_views_user_UserList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/task/views/user/UserList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/task/views/user/UserList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mixins/Tooltip */ "./resources/js/task/mixins/Tooltip.js");
/* harmony import */ var _components_avatar_CAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/avatar/CAvatar */ "./resources/js/task/components/avatar/CAvatar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CAvatar: _components_avatar_CAvatar__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mixins: [_mixins_Tooltip__WEBPACK_IMPORTED_MODULE_0__.default],
  data: function data() {
    return {
      search: '',
      loadingItems: false,
      serverItemsLength: 0,
      itemsPerPage: 15,
      showFilter: false,
      filter: {
        page: 1,
        'filter[username]': null
      },
      headers: [{
        text: 'Avatar',
        value: 'avatar'
      }, {
        text: 'Name',
        value: 'username'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Action',
        value: 'action'
      }],
      items: [],
      actions: [{
        text: 'Edit Item',
        icon: 'mdi-pencil',
        click: this.handleEditItem
      }, {
        text: 'Delete Item',
        icon: 'mdi-close',
        click: this.handleDeleteItem
      }]
    };
  },
  watch: {
    '$route.query': {
      handler: function handler(query) {
        var filter = this.updateFilterQuery(query);
        this.fetchRecords(filter);
      },
      immediate: true
    }
  },
  methods: {
    //
    updateFilterQuery: function updateFilterQuery(query) {
      var filter = Object.assign(this.filter, query);
      filter.page = parseInt(filter.page);
      return filter;
    },
    resetFilter: function resetFilter() {
      this.filter = {
        page: 1,
        'filter[username]': null
      };
    },
    fetchRecords: function fetchRecords(query) {
      var _this = this;

      this.loadingItems = true;
      this.items = [];
      return this.$store.dispatch('fetchUser', query).then(function (_ref) {
        var data = _ref.data,
            meta = _ref.meta;
        _this.items = data;
        _this.serverItemsLength = meta.total;
        _this.loadingItems = false;
      })["catch"](function () {
        _this.loadingItems = false;
      });
    },
    //action
    handleCreateItem: function handleCreateItem() {},
    handleViewItem: function handleViewItem() {},
    handleEditItem: function handleEditItem(_ref2) {
      var id = _ref2.id;
    },
    handleDeleteItem: function handleDeleteItem() {},
    handleSubmit: function handleSubmit() {},
    handleRefreshItem: function handleRefreshItem() {
      this.fetchRecords(this.filter);
    },
    // filter
    handlePageChanged: function handlePageChanged(page) {
      this.filter.page = page;
      this.filter.t = Date.now();
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      });
    },
    handleResetFilter: function handleResetFilter() {
      this.filter = {
        page: 1,
        'filter[username]': null
      };
      this.$router.replace({
        path: this.$route.path
      });
    },
    handleApplyFilter: function handleApplyFilter() {
      this.filter.t = Date.now();
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      });
    },
    handleClear: function handleClear() {
      this.resetFilter();
      this.filter.t = Date.now();
      this.$router.replace({
        path: this.$route.path,
        query: this.filter
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/task/mixins/Tooltip.js":
/*!*********************************************!*\
  !*** ./resources/js/task/mixins/Tooltip.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    onTooltip: function onTooltip(arg) {
      return arg;
    }
  }
});

/***/ }),

/***/ "./resources/js/task/views/user/UserList.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/task/views/user/UserList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/task/views/user/UserList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/task/views/user/UserList.vue?vue&type=template&id=390aa100&":
/*!**********************************************************************************!*\
  !*** ./resources/js/task/views/user/UserList.vue?vue&type=template&id=390aa100& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_390aa100___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_390aa100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_390aa100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=template&id=390aa100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/task/views/user/UserList.vue?vue&type=template&id=390aa100&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/task/views/user/UserList.vue?vue&type=template&id=390aa100&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/task/views/user/UserList.vue?vue&type=template&id=390aa100& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-user" },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-card",
                    { attrs: { tile: "" } },
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              text: "",
                              solo: "",
                              flat: "",
                              "prepend-icon": _vm.showFilter
                                ? "mdi-filter-variant-plus"
                                : "mdi-filter-variant",
                              "append-icon": "mdi-magnify",
                              placeholder: "Type something",
                              "hide-details": "",
                              clearable: ""
                            },
                            on: {
                              keyup: function($event) {
                                if (
                                  !$event.type.indexOf("key") &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                return _vm.handleApplyFilter($event)
                              },
                              "click:append": _vm.handleApplyFilter,
                              "click:prepend": function($event) {
                                _vm.showFilter = !_vm.showFilter
                              },
                              "click:clear": _vm.handleClear
                            },
                            model: {
                              value: _vm.filter["filter[username]"],
                              callback: function($$v) {
                                _vm.$set(_vm.filter, "filter[username]", $$v)
                              },
                              expression: "filter['filter[username]']"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: { click: _vm.handleRefreshItem }
                            },
                            [_c("v-icon", [_vm._v("mdi-refresh")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: { click: _vm.handleCreateItem }
                            },
                            [_c("v-icon", [_vm._v("mdi-plus")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showFilter,
                              expression: "showFilter"
                            }
                          ],
                          staticClass: "grey lighten-4",
                          attrs: { flat: "" }
                        },
                        [
                          _c("v-card-text"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "" },
                                  on: { click: _vm.handleResetFilter }
                                },
                                [_vm._v("Reset")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { tile: "", color: "primary" },
                                  on: { click: _vm.handleApplyFilter }
                                },
                                [_vm._v("Apply")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "pa-0" },
                        [
                          _c("v-data-table", {
                            attrs: {
                              loading: _vm.loadingItems,
                              headers: _vm.headers,
                              items: _vm.items,
                              "items-per-page-options": [15, 30, 50],
                              "server-items-length": _vm.serverItemsLength,
                              "items-per-page": _vm.itemsPerPage,
                              page: _vm.filter["page"],
                              "item-key": "id",
                              "show-select": ""
                            },
                            on: {
                              "update:page": [
                                function($event) {
                                  return _vm.$set(_vm.filter, "page", $event)
                                },
                                _vm.handlePageChanged
                              ]
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "item.avatar",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c("c-avatar", {
                                        staticClass: "my-3",
                                        attrs: { username: item.username }
                                      })
                                    ]
                                  }
                                },
                                {
                                  key: "item.action",
                                  fn: function(ref) {
                                    var item = ref.item
                                    return [
                                      _c(
                                        "v-menu",
                                        {
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var menu = ref.on
                                                  return [
                                                    _c(
                                                      "v-tooltip",
                                                      {
                                                        attrs: { bottom: "" },
                                                        scopedSlots: _vm._u(
                                                          [
                                                            {
                                                              key: "activator",
                                                              fn: function(
                                                                ref
                                                              ) {
                                                                var tooltip =
                                                                  ref.on
                                                                return [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      {
                                                                        attrs: {
                                                                          icon:
                                                                            ""
                                                                        }
                                                                      },
                                                                      _vm.onTooltip(
                                                                        Object.assign(
                                                                          {},
                                                                          tooltip,
                                                                          menu
                                                                        )
                                                                      )
                                                                    ),
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "mdi-dots-vertical"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              }
                                                            }
                                                          ],
                                                          null,
                                                          true
                                                        )
                                                      },
                                                      [
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v("Action")
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        },
                                        [
                                          _vm._v(" "),
                                          _c(
                                            "v-list",
                                            {
                                              staticClass: "pa-0",
                                              attrs: { dense: "" }
                                            },
                                            _vm._l(_vm.actions, function(
                                              action
                                            ) {
                                              return _c(
                                                "v-list-item",
                                                {
                                                  key: action.text,
                                                  on: {
                                                    click: function($event) {
                                                      return action.click(item)
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-icon",
                                                    { staticClass: "mr-2" },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          attrs: { small: "" }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(action.icon)
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-list-item-title", [
                                                    _vm._v(_vm._s(action.text))
                                                  ])
                                                ],
                                                1
                                              )
                                            }),
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/task/views/user/UserList.vue":
/*!***************************************************!*\
  !*** ./resources/js/task/views/user/UserList.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserList_vue_vue_type_template_id_390aa100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=390aa100& */ "./resources/js/task/views/user/UserList.vue?vue&type=template&id=390aa100&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/task/views/user/UserList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VContainer.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/VDataTable.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VList.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItem.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/VListItemIcon.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/VMenu.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VSpacer.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/VToolbar.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/VTooltip.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserList_vue_vue_type_template_id_390aa100___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserList_vue_vue_type_template_id_390aa100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__.VBtn,VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.default,VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__.VCardActions,VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__.VCardText,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__.default,VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__.default,VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__.default,VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__.default,VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__.VIcon,VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__.default,VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__.default,VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__.default,VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_15__.VListItemTitle,VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_16__.default,VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_17__.default,VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_18__.default,VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_19__.default,VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_20__.default,VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_21__.default})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/task/views/user/UserList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ })

}]);