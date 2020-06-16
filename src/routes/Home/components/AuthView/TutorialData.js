class TutorialDataService {
   
    update(seri_no, data) {
      return http.put(`/tutorials/${seri_no}`, data);
    }
  
   
  }
  
  export default new TutorialDataService();