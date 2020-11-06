let id: number = JSON.parse(window.localStorage.getItem('idMax') || '0');

export const createID = () => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id));
  return id;
};

