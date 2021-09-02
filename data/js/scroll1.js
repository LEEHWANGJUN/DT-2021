$(document).ready(function () {
  $("*").mousewheel(function (e, delta) {
    this.scrollLeft -= delta * 300;
    e.preventDefault();
  });
});

