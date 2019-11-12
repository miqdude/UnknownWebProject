<template>
    <v-container>
        <v-card
            max-width="344"
            outlined
        >
            <v-row :justify="justify">
                <v-list-item-avatar
                    size="80"
                    color="pink"
                ></v-list-item-avatar>
            </v-row>
        
            <v-card-title class="headline mb-1">Your Name Here</v-card-title>
            <v-card-subtitle>Sort things about you</v-card-subtitle>

            <!-- <v-card-actions>
            <v-btn text>Button</v-btn>
            <v-btn text>Button</v-btn>
            </v-card-actions> -->
        </v-card>
    </v-container>
</template>
<script lang="ts" src='./usercolumn.ts'>
</script>