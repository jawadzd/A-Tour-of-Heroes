import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validator to check if the value contains the word "angular"
export function containsAngularValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = /angular/i.test(control.value);
    return forbidden ? { 'containsAngular': { value: control.value } } : null;
  };
}

// Validator to check if the value is a valid email
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value);
    return valid ? null : { 'email': { value: control.value } };
  };
}
