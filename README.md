# Unexpected 'undefined' with Optional Parameters in TypeScript

This repository demonstrates a common, yet subtle, issue in TypeScript related to optional function parameters.  When an optional parameter is not provided, it defaults to `undefined`, which may not be the desired behavior.

The `bug.ts` file contains the problematic code.  The `bugSolution.ts` file offers a solution to address this unexpected `undefined` output.

## Problem

In TypeScript, optional parameters are defined using the `?` symbol.  If a caller omits the optional parameter, TypeScript sets its value to `undefined`. This can lead to unexpected results if your function doesn't explicitly handle the case where the parameter is `undefined`.

## Solution

The solution involves adding a check within the function to handle the `undefined` value.  This could involve providing a default value, throwing an error, or using a different logic path based on the parameter's value.