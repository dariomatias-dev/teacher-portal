export interface Subject {
  name: string;
  major: string;
  term: string;
}

export interface Teacher {
  uid: string;
  name: string;
  dept: string;
  curriculum: Subject[];
}

export interface Message {
  author: string;
  topic: string;
  body: string;
}
