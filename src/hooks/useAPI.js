
export default async function useAPI(route = '') {
	const baseURL = 'https://api.spacexdata.com/v4/'

	const response = await fetch(`${baseURL}${route}`)
	const data = await response.json()

	return data
}