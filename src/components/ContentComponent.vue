<template>
<div>
    <div class="user-info content-wrapper">
        <div class="user-name-actions">
            <img v-if="user.image" class="user-logo" :src="user.image">
            <img v-if="!user.image" class="user-logo" src="../assets/images/default-user.png">
            <div class="user-name">{{user.first_name}} {{user.last_name}}</div>
            <div class="user-actions"><i class="fa fa-ok"></i><div>{{user.actions.completed_activities + user.actions.completed_apps}}</div>Activities &#38; Apps Completed</div>
            <div class="user-actions"><i class="fa fa-bookmark"></i><div>{{user.actions.saved_activities + user.actions.saved_apps}}</div>Activities &#38; Apps Saved</div>
            <div class="user-actions"><i class="fa fa-right-dir"></i><div>{{user.actions.saved_videos}}</div>Videos Saved</div>
        </div>
        <div class="user-activities">
            <div class="selected"><i class="fa fa-user-circle-o"></i>{{user.first_name}}'s Profile</div><div><i class="fa fa-location"></i><span>{{user.user_activities}}</span> Recommended Activites</div><div><i class="fa fa-right-dir"></i><span>{{user.user_videos}}</span> Inspirational Videos</div>
        </div>
    </div>
    <div class="profile-header content-wrapper">
        <div class="assessment-heading">Official Thrively Assessment Profile</div>
        <div class="select-btns">
            <div class="selected">Strength Roadmap</div>
            <div>View Responses</div>
            <div class="share-btn"><i class="fa fa-facebook-rect"></i>Share Profile</div>
        </div>
    </div>
    <div class="main-content content-wrapper">
        <div class="heading">{{user.evaluate_heading}}<img src="../assets/images/bookmark.png"></div>
        <div class="strengths bottom-border">
            TOP 5 STRENGTHS
            <ul>
                <li v-for="(strength, key, index) of user.strengths" v-if="key < 5">{{strength}}</li>
            </ul>
        </div>
        <div class="eval-desc">
            <p v-for="desc of user.evaluation_desc">{{desc}}</p>
        </div>
        <div class="more-about">
          <img src="../assets/images/book.png">
          <div class="more-text">
              <h1 class="wait-text">Wait! There's More...</h1>
              <div class="learn-more-text">Learn more about what makes {{user.first_name}} so awesome! Get valuable insights into {{user.first_name}}'s strengths, and see messages directly from our doctors to you.</div>
              <div class="learn-more">Learn More</div>
          </div>
        </div>
        <div class="interests">
            <div class="interest-heading bottom-border">Christopher's Career Interest<div class="edit">Edit Career Interests</div></div>
            <div class="career-int">
                <div v-for="career_interest of user.career_interests">
                    <i class="fa" :class="career_interest.icon_class"></i>
                    <span>{{career_interest.name}}</span>
                </div>
            </div>
        </div>
        <div class="interests">
            <div class="interest-heading bottom-border">Christopher's Interest<div class="edit">Edit Interests</div></div>
            <div class="self-interest bottom-border">
                <img v-if="user.interests.image" :src="user.interests.image">
                <div class="int-title">{{user.interests.heading}}</div>
                <div class="personal-int">
                    <div v-for="interest of user.interests.sub_interests">
                        {{interest}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script type="text/javascript" src="./../assets/js/content.js"></script>