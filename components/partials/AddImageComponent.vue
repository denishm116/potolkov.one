<template>
  <div>
    <v-row>
      <v-col>
        <v-btn @click="onButtonClick">
          <v-icon>mdi-paperclip</v-icon>
          Прикрепить изображения
        </v-btn>
        <input multiple class="input-field-file" type="file" ref="fupload" @change="onFileChange">
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="auto" v-if="readyToUpload">
        <v-radio-group v-model="mainImageRadio" column @change="sendImageData">
          <v-row v-for="(file, index) in formData" :key="index">
            <v-col>
              <clipper-basic
                class="my-clipper"
                :src="file.uploadFileData"
                :ref="'clipper' + index"
                :preview="'my-preview' + index"
                :corner="true"
                :init-width="100"
                :init-height="100"
                :ratio="265/180"
              >
              </clipper-basic>
              {{ file.displayFileName }}
            </v-col>
            <v-col>
              <clipper-preview :name="'my-preview' + index" class="my-clipper">
                <div class="placeholder" slot="placeholder">preview area</div>
              </clipper-preview>

            </v-col>

            <v-radio label="Сделать основной" :value="index"></v-radio>

          </v-row>
        </v-radio-group>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import {clipperBasic, clipperPreview} from 'vuejs-clipper'

export default {
  components: {
    clipperBasic, clipperPreview
  },
  props: [
    'show'
  ],
  data() {
    return {
      // trigger: 0,
      imageData: [],
      formData: [],
      mainImageRadio: 0,
    }
  },
  computed: {
    readyToUpload() {
      if (this.show)
        return this.formData.length
    },
  },
  methods: {
    onFileChange(event) {
      if (event.target.files && event.target.files.length) {
        let files = event.target.files
        for (let i = 0; i < files.length; i++) {
          let temp = {
            displayFileName: "(" + this.calcSize(files[i].size) + "Kb)",
            uploadFileData: '',
            file: files[i],
            key: i,
          }
          let reader = new FileReader();
          reader.onload = (e) => {
            temp.uploadFileData = e.target.result;
          };
          reader.readAsDataURL(files[i]);
          this.formData.push(temp)
        }
      }

    },
    sendImageData() {
      let m = 0
      for (let prop in this.$refs) {
        if (prop.substr(0, 7) === 'clipper') {
          const canvas = this.$refs[prop][0].clip()
          let main = (this.mainImageRadio === m) ? 1 : 0;
          this.imageData.push(
            {
              image: canvas.toDataURL("image/jpeg", 1),
              main: main
            }
          )
          m++
        }
      }
      this.$emit('imageData', this.imageData)
      this.imageData = []
    },

    onButtonClick() {
      this.$refs.fupload.click();
    },
    calcSize(size) {
      return Math.round(size / 1024);
    },
  },

  watch: {
    formData: function () {
      setTimeout(() => (this.sendImageData()), 500)
    }
  }

}
</script>

<style scoped>
.input-field-file {
  display: none;
}

.preview-image {
  width: 60vw;
  padding: 15px;
  margin: 15px;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 5px 6px 16px rgba(0, 0, 0, 0.15);
}

.thumbs {
  max-width: 150px;
  margin: 15px;
}

.my-clipper {
  width: 100%;
  max-width: 300px;
}

.placeholder {
  text-align: center;
  padding: 20px;
  background-color: lightgray;
}
</style>
