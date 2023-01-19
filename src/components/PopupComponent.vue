<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="success" v-bind="attrs" v-on="on"> Add new project </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Add a New Project
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
          ></v-text-field>

          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
          ></v-textarea>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormattedDatefns"
                clearable
                label="Due date"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="due = null"
                prepend-icon="date_range"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              @change="menu2 = false"
            ></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn text class="success mx-0 mt-3" @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from "date-fns";
export default {
  data() {
    return {
      title: "",
      content: "",
      due: "",
      menu2: false,
    };
  },
  methods: {
    submit() {
      console.log(this.title, this.content);
    },
  },
  computed: {
      computedDateFormattedDatefns () {
        return this.due ? format(parseISO(this.due), 'do MMMM yyyy') : ''
      },
  },
};
</script>
