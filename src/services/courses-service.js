import axios from 'axios';
import authHeader from './auth-header';

const COURSES_URL = 'http://localhost:9000/courses';

class CoursesService {
  async fetchAllCourses() {
    return axios.get(COURSES_URL, { headers: authHeader() });
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
