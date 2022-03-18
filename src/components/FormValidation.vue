<template>
    <form>
  <div class="mb-3 ms-5 mr-5">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
// import {required,minLength,maxLength,between} from 'vuelidate/lib/validators'
// export default {
//     data() {
//         return {
//             firstname: '',
//             lastname: '',
//             age: 0
//         }
//     },
//     validation: {
//         firstname: {
//             required,
//             minLength: minLength(3),
//             maxLength: maxLength(10)
//         },
//         lastname: {
//             required,
//             minLength: minLength(5),
//             maxLength: maxLength(12)
//         },
//         age: {
//             between: between(14,50)
//         }
//     }
// }
</script>

<style>

</style>