import {
  getObjectValueByPath,
  getPrefixedScopedSlots,
  getPropertyFromItem
} from "vuetify/lib/util/helpers";
import VDataTable from "vuetify/lib/components/VDataTable/VDataTable";
import VSimpleCheckbox from "vuetify/lib/components/VCheckbox/VSimpleCheckbox";
import VIcon from "vuetify/lib/components/VIcon";
import Row from "vuetify/lib/components/VDataTable/Row"; // Mixins
import MobileRow from "vuetify/lib/components/VDataTable/MobileRow"; // Mixins
import { mergeClasses } from "vuetify/lib/util/mergeData";

export default VDataTable.extend({
  name: "v-grid",
  props: {},

  methods: {
    genDefaultSimpleRow(item, index, classes = {}) {
      const scopedSlots = getPrefixedScopedSlots(
        "item.",
        this.$scopedSlots
      );
      const data = this.createItemProps(item, index);

      if (this.showSelect) {
        const slot = scopedSlots["data-table-select"];
        scopedSlots["data-table-select"] = slot
          ? () =>
            slot({
              ...data,
              isMobile: this.isMobile
            })
          : () =>
            this.$createElement(VSimpleCheckbox, {
              staticClass: "v-data-table__checkbox",
              props: {
                value: data.isSelected,
                disabled: !this.isSelectable(item)
              },
              on: {
                input: val => data.select(val)
              }
            });
      }

      if (this.showExpand) {
        const slot = scopedSlots["data-table-expand"];
        scopedSlots["data-table-expand"] = slot
          ? () => slot(data)
          : () =>
            this.$createElement(
              VIcon,
              {
                staticClass: "v-data-table__expand-icon",
                class: {
                  "v-data-table__expand-icon--active":
                    data.isExpanded
                },
                on: {
                  click: e => {
                    e.stopPropagation();
                    data.expand(!data.isExpanded);
                  }
                }
              },
              [this.expandIcon]
            );
      }

      return this.$createElement(this.isMobile ? MobileRow : Row, {
        key: getObjectValueByPath(item, this.itemKey),
        attrs: {
          "data-id": item.id
        },
        class: mergeClasses(
          {
            ...classes,
            "v-data-table__selected": data.isSelected
          },
          getPropertyFromItem(item, this.itemClass)
        ),
        props: {
          headers: this.computedHeaders,
          hideDefaultHeader: this.hideDefaultHeader,
          index,
          item,
          rtl: this.$vuetify.rtl
        },
        scopedSlots,
        on: {
          // TODO: for click, the first argument should be the event, and the second argument should be data,
          // but this is a breaking change so it's for v3
          click: () => this.$emit("click:row", item, data),
          contextmenu: event =>
            this.$emit("contextmenu:row", event, data),
          dblclick: event => this.$emit("dblclick:row", event, data)
        }
      });
    }
  }
});
