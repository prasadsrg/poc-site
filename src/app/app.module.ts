import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from "./components/app/app.component";

import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { ContactFormComponent } from "./components/common/contact-form/contact-form.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { PUCComponent } from "./components/common/puc/puc.component";

import { WelcomePageComponent } from "./containers/welcome-page/welcome-page.component";

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: "dff" }),
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        FlexLayoutModule,
        AgmCoreModule
    ],
    declarations: [AppComponent, ContactFormComponent, PUCComponent, HeaderComponent, FooterComponent, WelcomePageComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
        const platform = isPlatformBrowser(platformId) ? "in the browser" : "on the server";
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
