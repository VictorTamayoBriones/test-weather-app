import { getRandomUser } from '../services/getRandomUser';

export const adapterUser = async () =>{
    const user = await getRandomUser();
    const formatUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        gender: user.gender,
        location: `${user.location.city} ${user.location.state} ${user.location.country}`,
        cell: user.cell,
        photo: user.picture.large
    }
    return formatUser
}