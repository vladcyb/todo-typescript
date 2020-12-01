import { AxiosResponse } from 'axios'

const Responses = async (response: any): Promise<AxiosResponse> => {
  try {
    return await response
  } catch (e) {
    return await e.response
  }
}

export default Responses
