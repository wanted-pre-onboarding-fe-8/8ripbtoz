import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8000';

class HttpClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: BASE_URL,
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async get<T>(url: string) {
    const response: AxiosResponse<T> = await this.httpClient.get(url);
    await this.delay(500);
    return response.data;
  }

  patch<T>(url: string, data: T) {
    return this.httpClient.patch(url, data);
  }
}

const httpClient = new HttpClient();

export default httpClient;
