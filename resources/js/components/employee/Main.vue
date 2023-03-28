<template>
    <div id="employee-main">
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search">
            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                <a class="nav-link px-3" href="#">Sign out</a>
                </div>
            </div>
        </header>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3 sidebar-sticky">
                        <Form ref="myForm" @submit="saveData">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <label for="formGroupExampleInput" class="form-label">Name</label>
                                    <Field type="text" class="form-control" id="name" name="name" v-model="employee.name" :rules="isRequired"/>
                                    <ErrorMessage class="form-required" name="name" />
                                </li>
                                <li class="nav-item">
                                    <label for="formGroupExampleInput" class="form-label">Ic</label>
                                    <Field type="text" class="form-control" id="ic" name="ic" v-model="employee.ic"/>
                                </li>
                                <li class="nav-item">
                                    <label for="formGroupExampleInput" class="form-label">Contact</label>
                                    <Field type="text" class="form-control" id="contact" name="contact" v-model="employee.contact"/>
                                </li>
                                <li class="nav-item">
                                    <label for="formGroupExampleInput" class="form-label">Email</label>
                                    <Field type="email" class="form-control" id="email" name="email" v-model="employee.email" :rules="validateEmail"/>
                                    <ErrorMessage class="form-required" name="email" />
                                </li>
                                <li class="nav-item">
                                    <br>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </li>
                            </ul>
                        </Form>                        
                    </div>
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">List Of Employee</h1>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Ic</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="value in list_of_employees">
                                <td>{{ value.id }}</td>
                                <td>{{ value.name }}</td>
                                <td>{{ value.ic }}</td>
                                <td>{{ value.contact }}</td>
                                <td>{{ value.email }}</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    import { Field, Form, ErrorMessage  } from 'vee-validate';

    export default {
        components: {
            Form,
            Field,
            ErrorMessage,
        },

        data() {
            return {
                'employee' : {
                    'name' : '',
                    'ic' : '',
                    'contact' : '',
                    'email' : ''
                },

                list_of_employees: []
            };
        },

        mounted(){
            console.log('on mounted');
            axios.get('employee/list').then((response) => {
                console.log(response.data)
                this.list_of_employees = response.data
            }).catch((error) => {
                console.log(error)
            });
        },

        methods: {
            isRequired(value) {
                if (value && value.trim()) {
                    return true;
                }
                return 'This is required';
            },

            validateEmail(value) {
                // if the field is empty
                if (!value) {
                    return 'This field is required';
                }
                // if the field is not a valid email
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'This field must be a valid email';
                }
                // All is good
                return true;
            },

            saveData() {
                axios.post('/employee/create', this.employee).then(
                    response => {
                        console.log(response);
                        this.list_of_employees.push(response.data.data)
                        this.$toast.success(`Your data has been successfully saved`);
                        this.$refs.myForm.resetForm();
                    }
                ).catch(error => {
                    console.log(error.response.data.errors);
                    this.$toast.error(`Error has been occured`);
                    })
            }
        }
    };
</script>