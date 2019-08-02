import dayjs from "dayjs";
import Vue from "vue";

Vue.filter("date", value => {
  return dayjs(value).format("YYYY-MM-DD HH:MM:ss");
});
