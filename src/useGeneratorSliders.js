import React from "react";
import { useState } from "react";

export default function useGeneratorSliders(initialValue) {
    return useState(Array(2).fill(initialValue));
}