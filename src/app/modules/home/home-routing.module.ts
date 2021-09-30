import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { HomeResolverService } from "./resolver/home-resolver.service";

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent, 
        resolve: { movies: HomeResolverService }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { } 