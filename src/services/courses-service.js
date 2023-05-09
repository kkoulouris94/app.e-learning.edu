import axios from 'axios';
import authHeader from './auth-header';

const COURSES_URL = `http://${process.env.REACT_APP_SERVER_ADDR}:${process.env.REACT_APP_SERVER_PORT}/courses`;

class CoursesService {
  async fetchAllCourses() {
    return axios.get(COURSES_URL, { headers: authHeader() });
  }

  async fetchOneCourse(courseId) {
    return axios.get(`${COURSES_URL}/${courseId}`, { headers: authHeader() });
  }

  async enrollToCourse(courseId) {
    return axios.post(
      `${COURSES_URL}/${courseId}/enroll`,
      {},
      {
        headers: authHeader(),
      }
    );
  }

  async completeCourse(courseId) {
    return axios.post(
      `${COURSES_URL}/${courseId}/complete`,
      {},
      {
        headers: authHeader(),
      }
    );
  }
}

export default new CoursesService();
