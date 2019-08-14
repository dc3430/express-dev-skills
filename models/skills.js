const skills = [
    {skills: 'HTML', done: true},
    {skills: 'SQL', done: false},
    {skills: 'JavaScript', done: false},
    {skills: 'C++', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getOne(id) {
    return skills[id];
}

function getAll() {
    return skills;
}