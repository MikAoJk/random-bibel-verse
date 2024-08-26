'use client';

import React, {useState} from 'react';
import bible from "./data/bibelselskap1930.json";

import {Button, Heading} from "@navikt/ds-react";

interface Bible {
    translation: string;
    abbreviation: string;
    description: string;
    lang: string;
    language: string;
    direction: string;
    encoding: string;
    books: Books[];
    "distribution_lcsh": string;
    "distribution_version": string;
    "distribution_version_date": string;
    "distribution_abbreviation": string;
    "distribution_about": string;
    "distribution_license":  string;
    "distribution_sourcetype":  string;
    "distribution_source":  string;
    "distribution_versification":  string;
    "distribution_history": DistributionHistory[]
}

interface DistributionHistory {
    "history_1.0":  string;
    "history_1.1":  string;
    "history_1.5":  string;
    "history_2.0":  string;
}

interface Books {
    nr: number;
    name: string;
    chapters: Chapter[];
}

interface Chapter {
    chapter: number;
    name: string;
    verses: Verse[];
}

export interface Verse {
    chapter: number;
    verse: number;
    name: string;
    text: string;
}


const RandomBibelVerse = () => {

    const [randomBibleVerse, setRandomBibleVerse] = useState<Verse>();


    const findARandomBibleVerse = async () => {
        const bibleVerse = findRandomBibleVerse()
        setRandomBibleVerse(bibleVerse);
    }

    return (
        <div className="flex min-h-screen flex-col p-16 md:items-center md:p-24">
                <Heading size="xlarge" level="1" spacing> {`Oversettelse: ${bible.translation}`} </Heading>
                <Button className="mb-4" variant="primary" size="medium" onClick={findARandomBibleVerse}>Tilfeldig</Button>
                {randomBibleVerse && <Heading size="large" level="1" spacing> {`Vers: ${randomBibleVerse.name}`} </Heading>}
                {randomBibleVerse && <Heading size="medium" level="1" spacing> {`${randomBibleVerse.text}`} </Heading>}
        </div>
    );
};

function findRandomBibleVerse(): Verse {
    const randomBook = bible.books[Math.floor(Math.random() * bible.books.length)];
    const randomChapter = randomBook.chapters[Math.floor(Math.random() * randomBook.chapters.length)];

    return randomChapter.verses[Math.floor(Math.random() * randomChapter.verses.length)];
}


export default RandomBibelVerse;
