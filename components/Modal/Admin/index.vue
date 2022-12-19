<template>
  <div
    className="modal modal-blur fade show"
    id="modal-report"
    tabIndex="-1"
    role="dialog"
    aria-modal="true"
    style="display: block"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <slot name="header"></slot>
          <button
            v-on:click="closeModal()"
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <slot name="content"></slot>
        <div className="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
