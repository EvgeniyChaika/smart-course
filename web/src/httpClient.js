/* eslint-disable no-restricted-syntax */
import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

export class HttpClient {
  constructor() {
    methods.forEach(method => // eslint-disable-line no-return-assign
      this[method] = (path, { params, data, headers, attach } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](path);

        if (params) {
          request.query(params);
        }
        if (data) {
          request.send(data);
        }

        if (headers) {
          for (const key of Object.keys(headers)) {
            request.set(key, headers[key]);
          }
        }
        if (attach) {
          for (const key of Object.keys(attach)) {
            request.attach(key, attach[key]);
          }
        }

        request.end((err, { body } = {}) => // eslint-disable-line no-confusing-arrow
          err ? reject(body || err) : resolve(body));
      }));
  }
}

export default new HttpClient();
