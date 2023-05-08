import axios from "axios";

export class BookService {
  static CreateBook(data) {
    // debugger;
    var dataURL = "http://localhost:5000/api/v1/book/";

    return axios.post(dataURL, data);
  }
}
