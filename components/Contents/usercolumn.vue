<template>
    <v-container>
         <v-card
            max-width="344"
            class="mx-auto"
        >
            <v-list-item>
            <v-list-item-avatar>
                <img src="https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>Bhagaskarya Dharmawan</v-list-item-title>
                <v-list-item-subtitle>A hooman</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>

            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="194"
            ></v-img>

            <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus est libero, suscipit a mi eget, faucibus tempus purus. Integer libero nisi, dictum at placerat eget, accumsan vitae purus.
            </v-card-text>

            <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Read
            </v-btn>
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Bookmark
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script lang="ts" src='./usercolumn.ts'>
</script>

<style lang="scss">

</style>