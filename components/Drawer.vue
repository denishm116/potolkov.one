<template>
    <v-navigation-drawer
            :value="drawer"
            :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
             app
            :mini-variant="miniVariant"
            clipped
            hide-overlay
            :active = "$route.path"
    >


        <v-list
                dense
                nav
        >

        </v-list>

        <v-divider class="mb-2"/>

        <v-list
                expand
                nav
        >
            <!-- Style cascading bug  -->
            <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->


            <template v-for="(item, i) in items">
                <v-list dense>
                    <v-list-item link :to="item.to" :active="$route.path" exact>
                        <v-list-item-action>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </template>

            <v-divider class="mb-2"/>

            <v-list dense>
                <v-list-item link @click.stop="miniVariant = !miniVariant">

                    <v-list-item-content>
                        <v-list-item-title>Свернуть</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>

        </v-list>


    </v-navigation-drawer>
</template>

<script>
    // Utilities

    import {mapGetters} from "vuex";

    export default {


        props: {
            expandOnHover: {
                type: Boolean,
                default: false,
            },
        },

        data: () => ({
            miniVariant: false,
            items: [
                {
                    icon: 'mdi-cloud-download',
                    title: 'Добавить объект',
                    to: '/admin/objects/',
                },
                {
                    icon: 'mdi-table-large',
                    title: 'Каталог потолков',
                    to: '/admin/catalog/',
                },
                {
                    icon: 'mdi-tab',
                    title: 'Потолки',
                    to: '/admin/ceilings/',
                },
                {
                    title: 'Каталог освещения',
                    icon: ' mdi-brightness-2',
                    to: '/admin/lightning_catalog/',
                },
                {
                    title: 'Светильники',
                    icon: 'mdi-brightness-3',
                    to: '/admin/lightning',
                },
                {
                    title: 'Каталог комплектующих',
                    icon: 'mdi-check-all',
                    to: '/admin/component_catalog',
                },
                {
                    title: 'Комплектующие',
                    icon: 'mdi-check',
                    to: '/admin/component',
                },
                {
                    title: 'Блог',
                    icon: 'mdi-book-open',
                    to: '/admin/blog',
                },
            ],
        }),

        computed: {
            ...mapGetters('user/user', [
                'barColor', 'barImage', 'drawer'
            ]),


            profile() {
                return {
                    avatar: true,
                }
            },
        },
        mounted() {

        },

        methods: {},
    }
</script>

<style lang="sass">
    @import '~vuetify/src/styles/tools/_rtl.sass'

    #core-navigation-drawer
        .v-list-group__header.v-list-item--active:before
            opacity: .24

        .v-list-item
            &__icon--text,
            &__icon:first-child
                justify-content: center
                text-align: center
                width: 20px

                +ltr()
                    margin-right: 24px
                    margin-left: 12px !important

                +rtl()
                    margin-left: 24px
                    margin-right: 12px !important

        .v-list--dense
            .v-list-item
                &__icon--text,
                &__icon:first-child
                    margin-top: 10px

        .v-list-group--sub-group
            .v-list-item
                +ltr()
                    padding-left: 8px

                +rtl()
                    padding-right: 8px

            .v-list-group__header
                +ltr()
                    padding-right: 0

                +rtl()
                    padding-right: 0

                .v-list-item__icon--text
                    margin-top: 19px
                    order: 0

                .v-list-group__header__prepend-icon
                    order: 2

                    +ltr()
                        margin-right: 8px

                    +rtl()
                        margin-left: 8px
</style>
