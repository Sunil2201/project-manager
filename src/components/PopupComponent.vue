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
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>

          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :rules="inputRules"
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
import db from '@/fb'
import { addDoc, collection} from "firebase/firestore";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      menu2: false,
      inputRules: [
        v => v.length >= 3 || "Min length is 3 characters"
      ]
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()){
        const project = {
          title: this.title,
          content: this.content,
          due: format(parseISO(this.due), 'do MMMM yyyy'),
          person: 'The Net Ninja',
          status: 'ongoing'
        }

        addDoc(collection(db, "projects"), project).then(() => {
          console.log('Added to db')
        });
      }
    },
  },
  computed: {
      computedDateFormattedDatefns () {
        return this.due ? format(parseISO(this.due), 'do MMMM yyyy') : ''
      },
  },
};
</script>
