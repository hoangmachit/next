<template>
  <div className="page-header d-print-none">
    <div className="container-xl">
      <div className="row g-2 align-items-center">
        <div className="col">
          <div className="page-pretitle">Tổng quan</div>
          <slot name="title"></slot>
        </div>
        <div className="col-auto ms-auto d-print-none">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>