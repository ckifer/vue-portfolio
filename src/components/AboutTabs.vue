<template>
    <div>
        <v-tabs
            color="dark"
            dark
            slider-color="white"
            align-with-title
            centered
            grow
            next-icon
        >
            <v-tab
                v-for="item in items"
                :key="item.title"
                ripple
            >
                {{ item.title }}

            </v-tab>
            <v-tab-item
                v-for="item in items"
                :key="item.key"
                :click="currentTab = item.key"
            >
                <div :is="currentTab"></div>
            </v-tab-item>
        </v-tabs>
  </div>
</template>

<script>
    import Background from './BackgroundTab'
    import TechnicalSkills from './TechnicalSkillsTab'
    import PersonalLife from './PersonalLifeTab'

    export default {
        name: 'AboutTabs',
        components: {
            'Background': Background,
            'TechnicalSkills': TechnicalSkills,
            'PersonalLife': PersonalLife
        },
        data() {
            return{
                currentTab: 'MainProfile',
                items: [
                    {
                        key: 'Background',
                        title: 'Background'
                    },
                    {
                        key: 'TechnicalSkills',
                        title: 'Technical Skills'
                    },
                    {
                        key: 'PersonalLife',
                        title: 'Personal Life'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>