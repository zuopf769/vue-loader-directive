import LoaderDirective from './Loader/Loader.directive';
import TableLoaderDirective from './TableLoader/TableLoader.directive';

export default {
    install(Vue) {
        Vue.use(LoaderDirective);
        Vue.use(TableLoaderDirective);
    }
};