<template>
    <div>
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
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <label for="formGroupExampleInput" class="form-label">Name</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" >
                            </li>
                            <li class="nav-item">
                                <label for="formGroupExampleInput" class="form-label">Ic</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" >
                            </li>
                            <li class="nav-item">
                                <label for="formGroupExampleInput" class="form-label">Contact</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" >
                            </li>
                            <li class="nav-item">
                                <label for="formGroupExampleInput" class="form-label">Email</label>
                                <input type="text" class="form-control" id="formGroupExampleInput" >
                            </li>
                            <li class="nav-item">
                                <br>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Dashboard</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group me-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar" class="align-text-bottom"></span>
                            This week
                        </button>
                        </div>
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
                            <tr>
                            <td>1,015</td>
                            <td>random</td>
                            <td>tabular</td>
                            <td>information</td>
                            <td>text</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>